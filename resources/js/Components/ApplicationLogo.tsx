import { FC } from "react";

interface Props {
    logoUrl: string;
    logoWidth: number;
    logoHeight: number;
}

const ApplicationLogo: FC<Props> = ({
    logoUrl,
    logoWidth,
    logoHeight,
}: Props) => {
    return (
        <img
            src={`/assets/images/${logoUrl}`}
            width={logoWidth}
            height={logoHeight}
        />
    );
};

export default ApplicationLogo;
