import { simulateCrud } from '@/core/config/api';
import { servicesExample } from '@/shared/constants/mockData';
import type { Service } from '@/shared/types/serviceType';

export async function getServices(): Promise<Service[]> {
    const services = await simulateCrud(servicesExample, 1500);

    return services;
}
