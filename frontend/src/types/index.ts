export interface NeoObject {
    id: string;
    name: string;
    size: {
        estimatedDiameter: {
            kilometers: {
                estimatedDiameterMin: number;
                estimatedDiameterMax: number;
            };
        };
    };
    closeApproachData: Array<{
        closeApproachDate: string;
        missDistance: {
            astronomical: string;
            kilometers: string;
            lunar: string;
            miles: string;
        };
        relativeVelocity: {
            kilometersPerHour: string;
            kilometersPerSecond: string;
            milesPerHour: string;
        };
    }>;
}

export interface NeoResponse {
    near_earth_objects: {
        [date: string]: NeoObject[];
    };
    element_count: number;
}