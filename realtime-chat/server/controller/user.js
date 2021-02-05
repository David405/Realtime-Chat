var makeValidation = require('@withvoid/make-validation');
// models
var {User, USER_TYPES } = require ('../models/User');

module.exports = {
    onGetAllUsers: async (req, res) => { 
        try {
            const user = await User.find();
            return res.status(200).json({ success: true, user });
          } catch (error) {
            return res.status(500).json({ success: false, error: error })
          }
    },
    onGetUserById: async (req, res) => { 
        try {
            const user = await User.find({_id: req.params.id});
            return res.status(200).json({ success: true, user });
          } catch (error) {
            return res.status(500).json({ success: false, error: error })
          }
    },
    onCreateUser: async (req, res) => { 
        console.log(USER_TYPES)
        try {
            const validation = makeValidation(types => ({
              payload: req.body,
              checks: {
                firstName: { type: types.string },
                lastName: { type: types.string },
                type: { type: types.enum, options: { enum: USER_TYPES } },
              }
            }));
            if (!validation.success) return res.status(400).json(validation);
      
            const user = new User(req.body);
            await user.save();
            return res.status(200).json({ success: true, user });
          } catch (error) {
            return res.status(500).json({ success: false, error: error })
          }
    },
    onDeleteUserById: async (req, res) => { 
        try {
            const user = await User.findOneAndDelete({_id:req.params.id});
            return res.status(200).json({ 
              success: true, 
              message: 'Delete successful' 
            });
          } catch (error) {
            return res.status(500).json({ success: false, error: error })
          }
    },
  }