import { ShimmerButton } from "@/components/shared/customShimmerButton";
import { CourseContent } from "@/components/util/interface";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Link from "next/link";

export default function useRazorpayCourseCard({ course, className, onEnrollNow , disable = false}: { course: CourseContent, className?: string, onEnrollNow: (course: CourseContent) => void, disable?: boolean }) {


  return (
    <div
      className={cn("w-full flex flex-col justify-between bg-[url('/Card-bg-11.png')] bg-no-repeat bg-[length:100%_100%] border border-white/20 rounded-4xl p-6 gap-4", className)}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div className="glass-gradient py-1 md:py-2 px-4 rounded-full flex items-center justify-center">
          <p className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent capitalize text-base font-medium">
            {course.level}
          </p>
        </div>
        {/* TODO: Rahul to ask what hover effect should be here */}
        <Link href={`/agi/${course.slug}`}>
          <button className="text-sm md:text-base hyi-p py-2 px-3 rounded-full cursor-pointer">
            View Curriculum
          </button>
        </Link>


      </div>

      {/* Course Title */}
      <div>
        <h2 className="hyi-h2">{course.title}</h2>
      </div>

      {/* Course Details */}
      <div className="space-y-3">
        {course.description.map((detail, detailIndex) => (
          <div key={detailIndex} className="flex items-center gap-3">
            <Check className="h-4 w-4 text-green-500" />
            <span className="hyi-p">{detail}</span>
          </div>
        ))}
      </div>

      {/* Pricing */}
      <div className="flex flex-col gap-2 items-start justify-start">
        <h3 className="hyi-h3">Pricing:</h3>
        <div className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" />
          <span className="hyi-p">{course.price}</span>
        </div>
      </div>

      {/* Deliverables */}
      {/* <div className="flex flex-col gap-2 items-start justify-start">
          <h3 className="hyi-h3">Deliverables:</h3>
          <div className="flex flex-col justify-start items-start gap-2">
            {course.Deliverables.map((deliverable, deliverableIndex) => (
              <div
                key={deliverableIndex}
                className="flex items-center gap-3"
              >
                <Check className="h-4 w-4 text-green-500" />
                <span className="hyi-p">{deliverable}</span>
              </div>
            ))}
          </div>
        </div> */}
      {/* Goal */}
      {/* {course.goals.length > 0 &&
          (
            <div className="flex flex-col gap-2 items-start justify-start">
              <h3 className="hyi-h3">Goal:</h3>
              <div className="flex items-center gap-2">
                {course.goals.map((goalItem, goalIndex) => (
                  goalItem && (
                    <div
                      key={goalIndex}
                      className="flex items-start gap-3"
                    >
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="hyi-p">{goalItem}</span>
                    </div>
                  )
              )}
            </div>

          )} */}

      {/* Enroll Button */}
      <div className=" w-full md:w-[40%] self-center flex justify-center items-center">
        <ShimmerButton className="w-full px-16 sm:px-24 md:px-30 lg:px-48" shimmerDuration='8s' onClick={() => onEnrollNow(course)} disabled={disable}>Enroll Now</ShimmerButton>
      </div>


    </div>
  )
}