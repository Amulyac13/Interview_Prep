"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Feedback = () => {

    const [feedbackList,setFeedbackList]=useState([]);

    useEffect(()=>{
        GetFeedback();
    },[]);

    const params = useParams();
    const interviewId = params?.interview;
    const router=useRouter();

    const GetFeedback = async() => {
        const result=await db.select().from(UserAnswer).where(eq(UserAnswer.mockIdRef,interviewId)).orderBy(UserAnswer.id);

        console.log(result);
        setFeedbackList(result);
    }

    return(
        <div className="p-10">

            {feedbackList?.length==0 ? 
            <h2 className="font-bold text-xl text-gray-500">No Interview Feedback Record found</h2> : 
            <>
            <h2 className="text-3xl font-bold text-green-600">Congrulation!</h2>
            <h2 className="font-bold text-2xl">Here is your interview</h2>
            <h2 className="text-primary text-lg my-3">Your overall interview rating: <strong>7/10</strong></h2>
            <h2 className="text-sm text-gray-500">Find below interview question with correct answer, Your answer and feedback for improvement </h2>

            {feedbackList && feedbackList.map((item,index)=>(
                <Collapsible key={index} className="mt-7">
                    <CollapsibleTrigger className="p-2 bg-secondary rounded-lg my-2 text-left flex justify-between gap-4 md:gap-7">{item.question} <ChevronsUpDown className="w-28 h-28 sm:w-8 sm:h-8 md:w-5 md:h-5"/> </CollapsibleTrigger>
                    <CollapsibleContent>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-red-500 p-2 border rounded-lg"><strong>Rating: </strong>{item.rating}</h2>
                            <h2 className="p-2 border rounded-lg bg-red-50 text-sm text-red-900"><strong>Your Answer: </strong>{item.userAns}</h2>
                            <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-900"><strong>Correct Answer: </strong>{item.correctAns}</h2>
                            <h2 className="p-2 border rounded-lg bg-blue-50 text-sm text-primary"><strong>Feedback: </strong>{item.feedback
                            }</h2>
                        </div>
                    </CollapsibleContent>
              </Collapsible>
            ))}
            </>
            }
            <Button onClick={()=>router.replace('/dashboard')} className="mt-4 text-sm">Go Home</Button>

        </div>
    )
}

export default Feedback;