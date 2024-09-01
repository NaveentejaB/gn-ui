"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Page(){
    return(
        <div className="w-4/5">
            <div className="w-full h-full flex flex-col items-center">
                <div className="w-[380px] flex flex-col gap-4">
                    <div className="w-full flex flex-col items-center gap-2 px-12">
                        <h4 className="font-bold text-2xl text-black">Sign In</h4>
                        <p className="text-black text-lg text-center">Hey, Enter you details to login to your account</p>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <div className="w-full flex flex-col gap-2">
                            <div className="w-full flex flex-col gap-4 items-center">
                                <Input className="w-full" type="email" placeholder="Email Address"/>
                                <Input className="w-full" type="password" placeholder="Password"/>
                            </div>
                            <div className="w-full flex justify-end">
                                <p className="text-sm font-medium cursor-pointer">Forgot password?</p>
                            </div>
                        </div>
                        <Button className="w-full bg-BgDarkGreen hover:opacity-95 text-black text-base font-semibold">Sign In</Button>
                        <div className="w-full flex justify-center gap-2 text-black text-sm">
                            <span >Don't have account?</span>
                            <span className="font-semibold cursor-pointer">Register now</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}