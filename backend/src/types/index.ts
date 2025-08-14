export interface NearEarthObject {
    id: string;
    name: string;
    estimatedDiameter: {
        kilometers: {
            estimatedDiameterMin: number;
            estimatedDiameterMax: number;
        };
        meters: {
            estimatedDiameterMin: number;
            estimatedDiameterMax: number;
        };
        miles: {
            estimatedDiameterMin: number;
            estimatedDiameterMax: number;
        };
        feet: {
            estimatedDiameterMin: number;
            estimatedDiameterMax: number;
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

export interface NasaApiResponse {
    near_earth_objects: {
        [date: string]: NearEarthObject[];
    };
    element_count: number;
}