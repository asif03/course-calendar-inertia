import { useEffect, FormEventHandler } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Lock, LockKeyhole, Mail, MailIcon, Search } from "lucide-react";
import { Separator } from "@/Components/ui/separator";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
            <Card className="mx-auto max-w-sm border-0 bg-background dark:bg-background">
                <CardHeader className="text-primary dark:text-primary">
                    <CardTitle className="text-5xl font-semibold">
                        Sign in
                    </CardTitle>
                    <CardDescription className="pt-2 text-sm font-semibold text-primary dark:text-primary">
                        Sign in with Open accounts
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between">
                        <Button
                            variant="outline"
                            className="rounded-full"
                            size="lg"
                        >
                            <Mail className="mr-1 h-4 w-4" /> Google
                        </Button>
                        <Button
                            variant="outline"
                            className="rounded-full"
                            size="lg"
                        >
                            <Mail className="mr-1 h-4 w-4" /> Google
                        </Button>
                    </div>
                    <Separator className="my-4" />
                    <div className="py-2 text-sm font-semibold text-primary dark:text-primary">
                        Or continue with email address
                    </div>
                    <form onSubmit={submit}>
                        <div className="flex w-full flex-col gap-2">
                            <div className="relative ml-auto w-full flex-1 md:grow-0">
                                <MailIcon className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                                    id="email"
                                    name="email"
                                    value={data.email}
                                    autoComplete="username"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>

                            <div className="relative ml-auto w-full flex-1 md:grow-0">
                                <LockKeyhole className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                                    id="password"
                                    name="password"
                                    value={data.password}
                                    autoComplete="current-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <div className="flex items-center">
                                <Link
                                    href="#"
                                    className="ml-auto inline-block text-sm underline"
                                >
                                    Forgot your password?
                                </Link>
                            </div>

                            <Button
                                type="submit"
                                className="w-full"
                                variant="default"
                            >
                                Login
                            </Button>
                        </div>
                    </form>
                    <div className="mt-4 text-left text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/register" className="underline">
                            Sign up
                        </Link>
                    </div>
                </CardContent>
            </Card>

            {/* <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form> */}
        </GuestLayout>
    );
}
