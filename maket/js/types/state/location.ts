export type Tlocation = {
    totalElements: number;
    totalPages: number;
    first: boolean;
    last: boolean;
    size: number;
    content: [
        {
            id: string;
            name: string;
            content: string;
            awards: [
                {
                    id: string;
                    awardTitle: string;
                    awardDescription: string;
                    awardImage: string;
                },
            ];
        },
    ];
    number: number;
    sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
    };
    numberOfElements: number;
    pageable: {
        offset: number;
        sort: {
            empty: boolean;
            sorted: boolean;
            unsorted: boolean;
        };
        pageNumber: number;
        pageSize: number;
        paged: boolean;
        unpaged: boolean;
    };
    empty: boolean;
};
