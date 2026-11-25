import UserModel from "../models/User.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find().select("-password"); // Exclude the password field from the result
        res.status(200).json({
        success: true,
        users,
    });

    } catch (error) {
        res.status(500).json({
        success: false,
        message: "Failed to fetch users",
        error: error.message,
    });
}
};

export const getUserById = async (req, res) => {
    try{
        const user = await UserModel.findById(req.params.id).select("-password");
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch user",
            error: error.message,
        });
    }
};