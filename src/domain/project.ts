export interface Project {
    pName?;
    pdescription?;
    pRequirements:Requirements[];
    pManager?;
    pEngagementManager?;
}

export class Requirements {
    task?;
}