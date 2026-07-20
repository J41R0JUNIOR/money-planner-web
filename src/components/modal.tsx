import { colors } from "@/styles/colors";

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  onRequestClose: () => void;
  style?: {
    height?: string;
    width?: string;
  };
};

export default function Modal({ isOpen, children, onRequestClose, style }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay} onClick={onRequestClose}>
      <div
        style={{
          ...styles.content,
          width: style?.width ?? "80vw",
          height: style?.height ?? "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
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