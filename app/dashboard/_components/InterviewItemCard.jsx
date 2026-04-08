"use client";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useParams } from "next/navigation";
import React from 'react'

const InterviewItemCard = ({interview}) => {

    const router=useRouter();
    // const params = useParams();
    // const interviewId = params?.interview;

    const handleRoute=(path)=>{
        router.push(`/dashboard/interview/${interview?.mockId}/${path}`)
    }

  return (
    <div className="border shadow-sm rounded-lg p-3">
      <h2 className="font-bold text-primary">{interview?.jobPosition}</h2>
      <h2 className="text-sm text-gray-600">{interview?.jobExperience
      } Years of experience</h2>
      <h2 className="text-sm text-gray-500">Created At: {interview?.createdAt}</h2>
      <div className="flex justify-between mt-2">
        <Button size="sm" variant="outline" className="cursor-pointer text-base" onClick={()=>handleRoute('feedback')}>Feedback</Button>
        <Button size="sm" className="cursor-pointer text-base" onClick={()=>handleRoute('start')}>Start</Button>
      </div>
    </div>
  )
}

export default InterviewItemCard;
