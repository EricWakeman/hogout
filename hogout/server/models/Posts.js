import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const PostsSchema = new Schema(
  {
    creatorId: { type: mongoose.Types.ObjectId, ref: 'Account', required: true },
    challengeId: { type: mongoose.Types.ObjectId, ref: 'Challenges', required: true },
    body: { type: String, required: true },
    images: { type: Array }
  },
  { timestamps: true, toJSON: { virtuals: true } }

)

PostsSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
