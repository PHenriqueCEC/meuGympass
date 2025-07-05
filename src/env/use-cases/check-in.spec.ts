import { expect, test, describe, it, beforeEach, afterEach, vi } from 'vitest'
import { CheckInUseCase } from './checkin'
import { InMemoryCheckInsRepository } from '../repositories/in-memory/in-memory-check-ins-repository'

/*test('check if it works', () => {
    expect(2 + 2).toBe(5)
})*/

let checkInsRepository: InMemoryCheckInsRepository
let sut: CheckInUseCase

describe('Check-in Use Case', () => {
    
    //executa uma função ou bloco de código antes de cada teste individual em uma suíte de testes
    beforeEach(() => {
        checkInsRepository = new InMemoryCheckInsRepository()
        sut = new CheckInUseCase(checkInsRepository)

        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.useRealTimers()
    })
       
    it('should be able to check in', async () => {
        vi.setSystemTime(new Date(2022, 0, 20, 8, 0, 0))

        
        const { checkIn } = await sut.execute({
            gymId: "gym-01",
            userId: "user-01"
        })

        expect(checkIn.id).toEqual(expect.any(String))
    })

    // red, green, refactor <-- fluxo do TDD
  
    it('should not be able to check in twice in the same day', async () => {
        vi.setSystemTime(new Date(2022, 0, 20, 8, 0, 0))

        await sut.execute({
            gymId: "gym-01",
            userId: "user-01"
        })

        await expect(() => sut.execute({
            gymId: "gym-01",
            userId: "user-01"
        })).rejects.toBeInstanceOf(Error)
    })

    it('should be able to check in twice but in different days', async () => {
        vi.setSystemTime(new Date(2022, 0, 20, 8, 0, 0))

        await sut.execute({
            gymId: "gym-01",
            userId: "user-01"
        })

        vi.setSystemTime(new Date(2022, 0, 21, 8, 0, 0))

        const { checkIn } = await sut.execute({
            gymId: "gym-01",
            userId: "user-01"
        })

        expect(checkIn.id).toEqual(expect.any(String))
    })
    
})
 