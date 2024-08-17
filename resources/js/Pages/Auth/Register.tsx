import { useEffect, FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { Head, Link, useForm } from "@inertiajs/react";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <Card className="mx-auto max-w-sm border-0 bg-background dark:bg-background">
                <CardHeader className="text-primary dark:text-primary">
                    <CardTitle className="text-5xl font-semibold">
                        Sign Up
                    </CardTitle>
                    <CardDescription className="pt-2 text-sm font-semibold text-primary dark:text-primary">
                        Sign up for Open account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit}>
                        <div className="flex flex-col gap-2">
                            <div className="grid gap-2">
                                <InputLabel htmlFor="name" value="Name" />
                                <Input
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    autoComplete="name"
                                    placeholder="Name of user"
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            <div className="grid gap-2">
                                <InputLabel htmlFor="email" value="Email" />

                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    autoComplete="username"
                                    placeholder="email@example.com"
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
                            <div className="grid gap-2">
                                <InputLabel
                                    htmlFor="password"
                                    value="Password"
                                />

                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    placeholder="*******"
                                    autoComplete="new-password"
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
                            <div className="grid gap-2">
                                <InputLabel
                                    htmlFor="password_confirmation"
                                    value="Confirm Password"
                                />

                                <Input
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value,
                                        )
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.password_confirmation}
                                    className="mt-2"
                                />
                            </div>
                            <Button className="w-full" disabled={processing}>
                                Register
                            </Button>
                        </div>
                    </form>
                    <div className="mt-4 text-left text-sm">
                        Already have account?{" "}
                        <Link href="/login" className="underline">
                            Sign In
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </GuestLayout>
    );
}
