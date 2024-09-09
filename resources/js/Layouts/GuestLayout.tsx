import ApplicationLogo from "@/Components/ApplicationLogo";
import { Head, Link, usePage } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import onboardingImg from "/public/assets/images/onboarding.jpg";

export default function Guest({ children }: PropsWithChildren) {
    const { company } = usePage().props;

    return (
        <>
            <Head>
                <title>Home</title>
                <link rel="icon" type="image/x-icon" href={company.favicon} />
            </Head>
            <div className="h-screen w-full lg:grid lg:grid-cols-2">
                <div className="flex flex-col items-center justify-center bg-background py-4 dark:bg-background">
                    <Link href="/">
                        <ApplicationLogo
                            logoUrl={company.logo}
                            logoWidth={company.logoWidth}
                            logoHeight={company.logoHeight}
                        />
                    </Link>

                    <div className="w-full overflow-hidden px-4 py-4">
                        {children}
                    </div>
                </div>
                <div className="hidden bg-muted lg:block">
                    <img
                        src={onboardingImg}
                        alt="Image"
                        width="1920"
                        height="1080"
                        className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                        style={{
                            aspectRatio: "1920/1080",
                            objectFit: "cover",
                        }}
                    />
                </div>
            </div>
        </>
    );
}
