import { SearchGymUseCase } from "../search-gyms"
import { PrismaGymsRespository } from "@/env/repositories/prisma/prisma-gyms-repository"

export function makeSearchGymsUseCase() {
    const gymsRepository = new PrismaGymsRespository
    const useCase = new SearchGymUseCase(gymsRepository)

    return useCase
}