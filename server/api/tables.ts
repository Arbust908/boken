import { allArrays } from '@/server/database'

export default defineEventHandler(async () => {
  return {
    status: 200,
    body: allArrays,
  }
})
