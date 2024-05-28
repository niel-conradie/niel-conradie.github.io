interface Props {
  title: string;
}

export default function Heading({ title }: Props) {
  return (
    <>
      <h2 className="relative z-20 pb-2 text-center text-4xl tracking-wider">
        {title}
      </h2>
      <div className="relative h-20 w-[40rem]">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-foreground to-transparent blur-sm" />
        <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-foreground to-transparent" />
        <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm" />
        <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-primary to-transparent" />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 h-full w-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </>
  );
}
