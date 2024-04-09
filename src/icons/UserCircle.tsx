export function UserCircleIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="User"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" />
      <circle cx="12" cy="9.5" r="3.5" fill="none" stroke="currentColor" />
      <polyline
        points="4.5 18.5 7.5 15.5 12 17 16.5 15.5 19.5 18.5"
        fill="none"
        stroke="currentColor"
      />
    </svg>
  );
}
