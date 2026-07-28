import { colors } from "@/styles/colors";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: "fixed",
    inset: 0, 
    backgroundColor: "rgba(15, 23, 42, 0.55)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    padding: "20px",
  },

  content: {
    background: colors.cardBG,
    borderRadius: "16px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
    padding: "24px",
    maxWidth: "600px",
    width: "80vw",
    maxHeight: "90vh",
    overflowY: "auto",
  },
};