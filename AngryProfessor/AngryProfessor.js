function angryProfessor(students, arrivalTimes) {
    const YES = 'YES';
    const NO = 'NO';

    let inClassCount = 0;

    for (let i = 0; i < arrivalTimes.length; i++) {
        if (arrivalTimes[i] <=0) inClassCount +=1;
    }
    if(inClassCount >= students) return NO;
    return YES
}

angryProfessor(4, [-1, -1, 1, 0, 1, 1]);