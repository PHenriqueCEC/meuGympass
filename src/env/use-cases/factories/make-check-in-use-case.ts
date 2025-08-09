import { PrismaGymsRespository } from "@/env/repositories/prisma/prisma-gyms-repository"
import { CheckInUseCase } from "../checkin"
import { PrismaCheckInsRepository } from "@/env/repositories/prisma/prisma-check-ins-repository"

export function makeCheckInUseCase() {
    const checkInsRepository = new PrismaCheckInsRepository
    const gymsRepository = new PrismaGymsRespository
    const useCase = new CheckInUseCase(checkInsRepository, gymsRepository)

    return useCase
}