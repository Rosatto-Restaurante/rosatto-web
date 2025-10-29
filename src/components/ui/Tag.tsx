type Props = { children: React.ReactNode; className?: string };
export default function Tag({ children, className }: Props) {
  return (
    <span
      aria-hidden
      className={`inline-block h-1.5 w-12 bg-dl.gold rounded ${className ?? ""}`}
    >
      <span className="sr-only">{children}</span>
    </span>
  );
}
