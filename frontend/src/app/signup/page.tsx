"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { SiteLogo } from "@/components/site-logo";
import { CheckCircle2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export default function SignupPage() {
    const router = useRouter();
    const { isAuthenticated, authLoading } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [organisation, setOrganisation] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (!authLoading && isAuthenticated && !success) {
            router.replace("/assistant");
        }
    }, [authLoading, isAuthenticated, router, success]);

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Validate passwords match
        if (password !== confirmPassword) {
            setError("비밀번호가 일치하지 않습니다");
            setLoading(false);
            return;
        }

        // Validate password length
        if (password.length < 6) {
            setError("비밀번호는 6자 이상이어야 합니다");
            setLoading(false);
            return;
        }

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) throw error;

            if (data.session) {
                const trimmedName = name.trim();
                const trimmedOrg = organisation.trim();
                if (trimmedName || trimmedOrg) {
                    // The handle_new_user DB trigger creates the
                    // user_profiles row synchronously on auth.users insert,
                    // so we UPDATE rather than upsert — RLS permits update
                    // of the user's own row but blocks self-INSERT.
                    const { error: profileError } = await supabase
                        .from("user_profiles")
                        .update({
                            ...(trimmedName && { display_name: trimmedName }),
                            ...(trimmedOrg && { organisation: trimmedOrg }),
                            updated_at: new Date().toISOString(),
                        })
                        .eq("user_id", data.session.user.id);
                    if (profileError) {
                        console.error(
                            "[signup] failed to persist profile fields",
                            profileError,
                        );
                    }
                }
            }
            setSuccess(true);
            setTimeout(() => {
                router.push("/assistant");
            }, 2000);
        } catch (error: any) {
            setError(error.message || "회원가입 중 오류가 발생했습니다");
        } finally {
            setLoading(false);
        }
    };

    // Success View
    if (success) {
        return (
            <div className="min-h-dvh bg-white flex items-start justify-center px-6 pt-32 md:pt-40 pb-10 relative">
                <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2">
                    <SiteLogo size="md" className="md:text-4xl" asLink />
                </div>
                <div className="w-full max-w-md">
                    <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-sm">
                        <div className="mx-auto w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle2 className="h-6 w-6 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                            계정이 생성되었습니다!
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            홈페이지로 이동합니다...
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // Default Signup Form View
    return (
        <div className="min-h-dvh bg-white flex items-start justify-center px-6 pt-32 md:pt-40 pb-10 relative">
            <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2">
                <SiteLogo size="md" className="md:text-4xl" asLink />
            </div>
            <div className="w-full max-w-md">
                <div className="bg-white border border-gray-200 rounded-2xl p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-left text-2xl font-serif">
                            회원가입
                        </h2>
                        <div className="bg-gray-100 p-1 rounded-md flex text-xs font-medium">
                            <Link
                                href="/login"
                                className="px-3 py-1 text-gray-500 hover:text-gray-900"
                            >
                                로그인
                            </Link>
                            <span className="px-3 py-1 bg-white rounded-sm shadow-sm text-gray-900">
                                회원가입
                            </span>
                        </div>
                    </div>

                    <form onSubmit={handleSignup} className="space-y-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                이름{" "}
                                <span className="text-gray-400 font-normal">
                                    (선택)
                                </span>
                            </label>
                            <Input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="이름을 입력하세요"
                                className="w-full"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="organisation"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                소속{" "}
                                <span className="text-gray-400 font-normal">
                                    (선택)
                                </span>
                            </label>
                            <Input
                                id="organisation"
                                type="text"
                                value={organisation}
                                onChange={(e) =>
                                    setOrganisation(e.target.value)
                                }
                                placeholder="소속을 입력하세요"
                                className="w-full"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                이메일
                            </label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="이메일을 입력하세요"
                                required
                                className="w-full"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                비밀번호
                            </label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="비밀번호 생성 (최소 6자 이상)"
                                required
                                className="w-full"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                비밀번호 확인
                            </label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                placeholder="비밀번호를 다시 입력하세요"
                                required
                                className="w-full"
                            />
                        </div>

                        {error && (
                            <div className="text-red-600 text-sm bg-red-50 p-3 rounded">
                                {error}
                            </div>
                        )}

                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black hover:bg-gray-900 text-white"
                        >
                            {loading ? "회원가입 중..." : "회원가입"}
                        </Button>
                    </form>

                    {/* Terms and Privacy 
                    <div className="mt-4 text-center text-xs text-gray-500">
                        회원가입 시 다음에 동의하는 것으로 간주합니다:{" "}
                        <Link
                            href="https://pkh31337.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            이용약관
                        </Link>{" "}
                        및{" "}
                        <Link
                            href="https://pkh31337.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            개인정보처리방침
                        </Link>
                    </div>*/}
                </div>
            </div>
        </div>
    );
}
