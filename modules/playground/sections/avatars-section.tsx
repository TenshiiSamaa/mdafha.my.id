import { SectionHeader, PreviewBlock } from "../components/preview-block";
import { Avatar } from "@/common/components/ui";
import { Badge } from "@/common/components/ui";

const SIZES: Array<{ size: string; className: string; textClass: string }> = [
  { size: "xs", className: "h-6 w-6 text-[10px]", textClass: "XS · 24px" },
  { size: "sm", className: "h-8 w-8 text-xs", textClass: "SM · 32px" },
  { size: "md", className: "h-10 w-10 text-sm", textClass: "MD · 40px (default)" },
  { size: "lg", className: "h-12 w-12 text-base", textClass: "LG · 48px" },
  { size: "xl", className: "h-16 w-16 text-lg", textClass: "XL · 64px" },
];

const DUMMY_USERS = [
  { name: "Alice Martin", role: "Designer", fallback: "AM" },
  { name: "Bob Chen", role: "Developer", fallback: "BC" },
  { name: "Carol Kim", role: "Manager", fallback: "CK" },
  { name: "David Lee", role: "Engineer", fallback: "DL" },
  { name: "Eva Wilson", role: "Analyst", fallback: "EW" },
];

export function AvatarsSection() {
  return (
    <section>
      <SectionHeader
        id="avatars"
        title="Avatars"
        description="Avatar component with fallback initials, image support, and size variants."
      />

      <PreviewBlock title="Fallback Initials" hint="fallback=">
        {DUMMY_USERS.slice(0, 4).map((u) => (
          <Avatar key={u.name} fallback={u.fallback} />
        ))}
      </PreviewBlock>

      <PreviewBlock
        title="Size Scale"
        description="Custom size via className"
        className="items-end gap-4"
      >
        {SIZES.map(({ size, className, textClass }) => (
          <div key={size} className="flex flex-col items-center gap-1.5">
            <Avatar fallback="MD" className={className} />
            <p className="text-[10px] text-foreground/50 text-center whitespace-nowrap">{textClass}</p>
          </div>
        ))}
      </PreviewBlock>

      <PreviewBlock
        title="Avatar Group (Stacked)"
        description="Overlapping avatars for team displays"
      >
        <div className="flex -space-x-3">
          {DUMMY_USERS.map((u) => (
            <Avatar
              key={u.name}
              fallback={u.fallback}
              className="ring-2 ring-background"
              title={u.name}
            />
          ))}
          <div className="h-10 w-10 rounded-full ring-2 ring-background bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-xs font-bold text-foreground/60">
            +8
          </div>
        </div>
      </PreviewBlock>

      <PreviewBlock
        title="Avatar with User Info"
        description="Composite pattern: avatar + name + role"
        className="flex-col gap-3"
      >
        {DUMMY_USERS.slice(0, 3).map((u) => (
          <div key={u.name} className="flex items-center gap-3">
            <Avatar fallback={u.fallback} />
            <div>
              <p className="text-sm font-medium text-foreground">{u.name}</p>
              <p className="text-xs text-foreground/50">{u.role}</p>
            </div>
            <Badge variant="outline" className="ml-auto">{u.role}</Badge>
          </div>
        ))}
      </PreviewBlock>

      <PreviewBlock
        title="On Dark Background"
        dark
      >
        {DUMMY_USERS.slice(0, 4).map((u) => (
          <Avatar key={u.name} fallback={u.fallback} />
        ))}
        <div className="flex -space-x-3 ml-4">
          {DUMMY_USERS.map((u) => (
            <Avatar
              key={u.name}
              fallback={u.fallback}
              className="ring-2 ring-neutral-950"
            />
          ))}
        </div>
      </PreviewBlock>
    </section>
  );
}
