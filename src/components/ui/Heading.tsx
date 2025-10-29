import clsx from "clsx";

type Level = 1|2|3|4;
type Props = {
  as?: `h${Level}`;
  children: React.ReactNode;
  className?: string;
};

const base = "font-display leading-snug1";
const map = {
  h1: "text-h1 md:text-[3.2rem] tracking-wide20",
  h2: "text-h2 md:text-[2.8rem] tracking-wide5",
  h3: "text-h3",
  h4: "text-h4",
} as const;

export default function Heading({ as="h2", children, className }: Props) {
  const Comp = as;
  return <Comp className={clsx(base, map[as], className)}>{children}</Comp>;
}
