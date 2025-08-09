import { FetchNearbyGymUseCase } from "../fetch-nearby-gyms"
import { PrismaGymsRespository } from "@/env/repositories/prisma/prisma-gyms-repository"

export function makeFetchNearbyGymUseCase() {
    const gymsRepository = new PrismaGymsRespository
    const useCase = new FetchNearbyGymUseCase(gymsRepository)

    return useCase
}