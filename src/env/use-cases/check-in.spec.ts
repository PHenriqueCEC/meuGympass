import { expect, test, describe, it, beforeEach } from 'vitest'
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
    })
    
    
    it('should be able to check in', async () => {
        const { checkIn } = await sut.execute({
            gymId: "gym-01",
            userId: "user-01"
        })

        expect(checkIn.id).toEqual(expect.any(String))
    })
    
})
 