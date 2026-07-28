import { SectionHeader, PreviewBlock } from "../components/preview-block";
import { Input } from "@/common/components/ui";
import { Textarea } from "@/common/components/ui";
import { Button } from "@/common/components/ui";
import { Search, Mail, Lock, Eye, User } from "lucide-react";

export function InputsSection() {
  return (
    <section>
      <SectionHeader
        id="inputs"
        title="Inputs & Forms"
        description="Form field components — Input and Textarea. Pair with labels and error messages for accessible forms."
      />

      <PreviewBlock
        title="Basic Input"
        hint="<Input />"
        className="flex-col items-stretch max-w-sm"
      >
        <Input placeholder="Type something..." />
      </PreviewBlock>

      <PreviewBlock
        title="Input Variants"
        description="Different placeholder patterns and use cases"
        className="flex-col items-stretch gap-3 max-w-sm"
      >
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-foreground/80">Full Name</label>
          <Input placeholder="Mdafha" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-foreground/80">Email Address</label>
          <Input type="email" placeholder="you@example.com" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-foreground/80">Password</label>
          <Input type="password" placeholder="Enter password" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-foreground/80">Search</label>
          <Input type="search" placeholder="Search projects..." />
        </div>
      </PreviewBlock>

      <PreviewBlock
        title="Disabled & Read-only"
        className="flex-col items-stretch gap-3 max-w-sm"
      >
        <Input placeholder="Disabled input" disabled />
        <Input defaultValue="Read-only value" readOnly className="cursor-not-allowed opacity-60" />
      </PreviewBlock>

      <PreviewBlock
        title="Textarea"
        hint="<Textarea />"
        className="flex-col items-stretch max-w-sm"
      >
        <Textarea placeholder="Write a message..." rows={4} />
      </PreviewBlock>

      <PreviewBlock
        title="Contact Form (Composed)"
        description="Full form layout using Input + Textarea + Button"
        className="flex-col items-stretch gap-3 max-w-md"
      >
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-foreground/80">
              <span className="flex items-center gap-1">
                <User className="h-3 w-3" />
                Name
              </span>
            </label>
            <Input placeholder="Your name" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-foreground/80">
              <span className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                Email
              </span>
            </label>
            <Input type="email" placeholder="your@email.com" />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-foreground/80">Subject</label>
          <Input placeholder="What is this about?" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-foreground/80">Message</label>
          <Textarea placeholder="Your message here..." rows={4} />
        </div>
        <Button variant="primary" size="md" className="w-full gap-2">
          <Mail className="h-4 w-4" />
          Send Message
        </Button>
      </PreviewBlock>

      <PreviewBlock
        title="Search Bar Pattern"
        className="flex-col items-stretch max-w-md"
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
          <Input
            placeholder="Search projects, technologies..."
            className="pl-9"
          />
        </div>
      </PreviewBlock>

      <PreviewBlock
        title="Input with Icon Suffix"
        className="flex-col items-stretch gap-3 max-w-sm"
      >
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
          <Input type="password" placeholder="Password" className="pl-9 pr-9" />
          <Eye className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40 cursor-pointer" />
        </div>
      </PreviewBlock>
    </section>
  );
}
