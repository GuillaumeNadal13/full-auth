import { apiSlice } from '../services/apiSlice';


const sampleApiSlice = apiSlice.injectEndpoints({
    overrideExisting: true,
    endpoints: builder => ({
        FetchSampleModelByName: builder.query({
            query: (name) => `samples/description/${name}/`,
        }),
        User: builder.query({
            query: () => `samples/user/`,
        }),
        DetailSample:builder.query({
            query: (name) => `samples/detail/${name}/`,

        }),
        SubstrateSample:builder.query({
            query: (name) => `samples/substrate/detail/${name}/`,
        }),
        SemDetail:builder.query({
            query: (id) => `samples/sem/${id}`,

        }),
        UserMachine:builder.query({
            query: () => `samples/user-machine/`,

        }),
        ListElement:builder.query({
            query: () => `/samples/elements/`,

        }),
        UserMachineMe:builder.query({
            query: (id) => `samples/user-machine/me`,

        }),

        SampleAdd:builder.mutation({
            query: (data) => ({
                url: 'samples/init/',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: data,
            }),
        }),

        methodList:builder.query({
            query: () => `/samples/methodlist/`,

        }),
        SEMAdd:builder.mutation({
            query: (data) => ({
                url: 'samples/sem/',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: data,
            }),
        }),
        AFMAdd:builder.mutation({
            query: (data) => ({
                url: 'samples/afm/',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: data,
            }),
        }),
        SEMDelete: builder.mutation({
            query: (id) => ({
                url: `/samples/sem/${id}/`,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        }),
        AFMDelete: builder.mutation({
            query: (id) => ({
                url: `/samples/afm/${id}/`,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        }),
        MeetingList:builder.query({
            query: () => `/dashboard/meeting/`,

        }),
    }),
});

export const {
    useFetchSampleModelByNameQuery,
    useUserQuery,
    useDetailSampleQuery,
    useSubstrateSampleQuery,
    useSemDetailQuery,
    useUserMachineQuery,
    useListElementQuery,
    useUserMachineMeQuery,

    useSampleAddMutation,

    useMethodListQuery,
    useSEMAddMutation,
    useAFMAddMutation,
    useSEMDeleteMutation,
    useAFMDeleteMutation,

    useMeetingListQuery,
} = sampleApiSlice;
