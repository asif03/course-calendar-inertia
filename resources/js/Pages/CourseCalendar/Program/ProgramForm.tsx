import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { IDepartment } from "@/types";
import { router } from "@inertiajs/react";

import { FC } from "react";

interface Props {
    departments: IDepartment[];
}

const ProgramForm: FC<Props> = ({ departments }) => {
    function handleSubmit(e) {
        e.preventDefault();
        //router.post("/users", values);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-2">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="department" className="text-right">
                        Department
                    </Label>
                    <Select name="department">
                        <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select a department" />
                        </SelectTrigger>
                        <SelectContent className="w-full">
                            {departments.map((department) => (
                                <SelectItem value={department.id}>
                                    {department.department}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-2">
                    <Label htmlFor="programTitle" className="text-right">
                        Program Title
                    </Label>
                    <Input
                        id="programTitle"
                        placeholder="Title of a program"
                        className="col-span-3"
                        value={}
                        required
                    />
                </div>
                <div className="grid grid-cols-4 items-center gap-2">
                    <Label htmlFor="fee" className="text-right">
                        Program Fee
                    </Label>
                    <Input
                        id="fee"
                        placeholder="5000"
                        className="col-span-3"
                        required
                    />
                </div>
                <Button type="submit">Save changes</Button>
            </div>
        </form>
    );
};

export default ProgramForm;
