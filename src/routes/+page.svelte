<script lang="ts">
import { Badge } from '$lib/browser/shadcn-svelte/components/ui/badge';
import * as Card from '$lib/browser/shadcn-svelte/components/ui/card';
</script>

<Card.Root
  class="w-[369px] rounded-[12px] border-0 border-none shadow-[8px_8px_20px_0_rgba(85,85,85,0.08)]"
>
  <Card.Content
    class="flex flex-col items-start gap-4 border-b border-solid border-b-challenge-light-gray px-4 pb-5 pt-4"
  >
    <img
      src="/images/cactus_img.jpg"
      alt="Placeholder"
      class="h-[152px] w-full rounded-[12px] object-cover"
    />
    <Badge
      class="rounded-[50px] bg-challenge-pink px-4 py-1 text-[10px] font-semibold leading-none text-challenge-purple hover:bg-challenge-pink hover:text-challenge-purple"
    >
      Design
    </Badge>
    <div class="flex flex-col gap-[6px]">
      <Card.Title class="text-[18px] font-semibold leading-none">
        Embracing Minimalism
      </Card.Title>
      <p
        class="p-0 text-[14px] font-light leading-normal text-challenge-dark-gray"
      >
        From minimalist sculptures to minimalist paintings, this blog will
        inspire you to appreciate the beauty that lies in simplicity.
      </p>
    </div>
  </Card.Content>
  <Card.Footer
    class="px-4 py-5 text-[12px] leading-none text-challenge-dark-gray"
  >
    Annie Spratt
  </Card.Footer>
</Card.Root>
