interface Agenda {
    category: string,
    question: string,
    yesVotes: number,
    noVotes: number,
    totalVotes: number,
    duration: number,
    createdOn: string,
    finishOn: string,
    hasEnded: boolean
}

export default Agenda