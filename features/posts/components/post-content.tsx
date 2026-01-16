import Image from "next/image";
import { MostViewed } from "./most-viewed";
import { ShareSidebar } from "./share-sidebar";

export function PostContent() {
  return (
    <div className="py-12 bg-white">
      <div className="flex flex-col md:flex-row gap-6">
        <ShareSidebar className="md:w-[20%] max-md:order-last" />

        {/* Main content */}
        <div className="flex-1">
          <article className="text-black">
            {/* Lead paragraph */}
            <p className="text-lg font-semibold leading-relaxed mb-6">
              Curabitur sit amet sapien at velit fringilla tincidunt porttitor
              eget lacus. Sed mauris libero, malesuada et venenatis vitae, porta
              ac enim.
            </p>

            {/* Body text */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              Curabitur sit amet sapien at velit fringilla tincidunt porttitor
              eget lacus. Sed mauris libero, malesuada et venenatis vitae, porta
              ac enim. Aliquam erat volutpat. Cras tristique eleifend dolor, et
              ultricies nisi feugiat sed. Pellentesque blandit orci eu velit
              vehicula commodo. Phasellus{" "}
              <span className="underline">imperdiet</span> finibus ex eget
              gravida. Maecenas vitae molestie dolor. Nulla hendrerit ipsum leo,
              in tempor urna interdum ut. Sed molestie sodales quam. Mauris
              sollicitudin metus at eros imperdiet, vitae pulvinar nunc
              condimentum. Pellentesque rhoncus, lacus sit amet mollis placerat,
              nulla lectus maximus justo, quis gravida elit augue id lacus.
            </p>

            {/* Image row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/hands-typing-on-laptop-keyboard.jpg"
                  alt="Article image 1"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </article>
        </div>

        <div className="max-lg:hidden sticky top-6 md:w-[25%]">
          <MostViewed light />
        </div>
      </div>
    </div>
  );
}
