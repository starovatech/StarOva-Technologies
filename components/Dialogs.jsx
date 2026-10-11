"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import ConnectDialog from "@/components/ConnectDialog";
import EnquiryDialog from "@/components/EnquiryDialog";

const DialogsContext = createContext(null);

// Holds which pop-up is open ("connect" | "enquiry" | null) so any button on any page can open one
export function DialogsProvider({ children }) {
  const [active, setActive] = useState(null);
  const [service, setService] = useState(null);

  const open = useCallback((name, options = {}) => {
    setService(options.service ?? null);
    setActive(name);
  }, []);
  const close = useCallback(() => setActive(null), []);

  // Lock page scroll while a pop-up is up
  useEffect(() => {
    document.documentElement.style.overflow = active ? "hidden" : "";
  }, [active]);

  return (
    <DialogsContext.Provider value={open}>
      {children}
      <ConnectDialog
        open={active === "connect"}
        onClose={close}
        onEnquire={() => open("enquiry")}
      />
      <EnquiryDialog open={active === "enquiry"} onClose={close} service={service} />
    </DialogsContext.Provider>
  );
}

export function useOpenDialog() {
  return useContext(DialogsContext);
}

// Drop-in button for server components: <DialogButton dialog="enquiry">Start a project</DialogButton>
export function DialogButton({ dialog, service, onClick, children, ...props }) {
  const open = useOpenDialog();
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      onClick={(e) => {
        onClick?.(e);
        open(dialog, { service });
      }}
      {...props}
    >
      {children}
    </button>
  );
}
