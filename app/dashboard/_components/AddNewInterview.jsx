"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAIModal";
import { LoaderCircle } from "lucide-react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { v4 as uuidv4 } from 'uuid';
import moment from "moment";
import { useRouter } from "next/navigation";

const AddNewinterview = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [jobPosition, setJobPosition] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [jobExperience, setJobExperience] = useState("");

    const [loading,setLoading]=useState(false);

    const [jsonResponse,setJsonResponse]=useState();
    const {user}=useUser();

    const router=useRouter();

    const onSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const InputPrompt="Job Position: "+jobPosition+", Job Description: "+jobDescription+",Years of Experience: "+jobExperience+", Depends on Job Position, Job Description & Years of Experience information please us "+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+" interview question along with Answer in JSON Format. Give us question and answer fields on JSON"

        console.log(InputPrompt)
        const result = await chatSession.sendMessage(InputPrompt);
        const MockJsonResponse=(result.response.text()).replace('```json','').replace('```','');
        // console.log(JSON.parse(MockJsonResponse));
        setJsonResponse(MockJsonResponse)

        if(MockJsonResponse){
        const resp=await db.insert(MockInterview).values({
            mockId:uuidv4(),
            jsonMockResp:MockJsonResponse,
            jobPosition:jobPosition,
            jobDesc:jobDescription,
            jobExperience:jobExperience,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format('DD-MM-yyyy')
        }).returning({mockId:MockInterview.mockId})

        console.log("Inserted",resp);

        if(resp){
            setOpenDialog(false);
            router.push('/dashboard/interview/'+resp[0]?.mockId);
        }
    }
    else{
        console.log("Error");
    }
        setLoading(false);
    };

    return (
        <div>
            <div
                className="p-10 border rounded-lg bg-gray-100 hover:scale-105 hover:shadow-md cursor-pointer transition-all"
                onClick={() => setOpenDialog(true)}
            >
                <h2 className="text-lg text-center">+ Add New</h2>
            </div>

            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl">
                            Tell me more about your job interviewing
                        </DialogTitle>
                        <DialogDescription>
                            Add details about your job position/role, job description, and years of experience.
                        </DialogDescription>
                    </DialogHeader>

                    {/* ✅ Moved form OUTSIDE of DialogDescription */}
                    <form onSubmit={onSubmit}>
                        <div className="my-3">
                            <label>Job Role/Job Position</label>
                            <Input
                                placeholder="Ex. Full Stack Developer"
                                value={jobPosition}
                                onChange={(e) => setJobPosition(e.target.value)}
                                required
                            />
                        </div>

                        <div className="my-3">
                            <label>Job Description/Tech Stack</label>
                            <Textarea
                                placeholder="Ex. React, Next.js, Node.js, MySQL"
                                value={jobDescription}
                                onChange={(e) => setJobDescription(e.target.value)}
                                required
                            />
                        </div>

                        <div className="my-3">
                            <label>Years of Experience</label>
                            <Input
                                type="number"
                                placeholder="Ex. 5"
                                max={60}
                                value={jobExperience}
                                onChange={(e) => setJobExperience(e.target.value)}
                                required
                            />
                        </div>

                        <div className="flex gap-5 justify-end mt-6">
                            <Button variant="ghost" type="button" onClick={() => setOpenDialog(false)}>
                                Cancel
                            </Button>
                            <Button type="submit" disabled={loading}>
                                {loading ? <>
                                < LoaderCircle className="animate-spin"/> Generating from AI
                                </> :
                                "Start Interview"
                            }
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AddNewinterview;
