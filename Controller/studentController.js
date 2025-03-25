import Student from "../Schema/StudentSchema.js";


export const getStudent = async (req, res) => {
    try {
        const { rollNo } = req.params;
        const student = await Student.findOne({ rollNo: rollNo });

        if (!student) {
            return res.status(404).json({ message: "student not found" });
        }

        if (student) {
            res.status(200).json({ message: "success", data: student });
        }
    } catch (error) {
        res.status(500).json({ message: "server Error", error: error.message });
    }
}

export const getAllStudents = async (req, res) => {
    try {
        const student = await Student.find();
        if (student) {
            res.status(200).json({ message: "success", data: student });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "server Error", error: error.message });
    }
}

