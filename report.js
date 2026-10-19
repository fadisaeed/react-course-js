export default function withStatus(students)
{
    const updated_students=[];
    for(let i=0;i<students.length;i++)
    {
        if(students[i].grade>=56)
            updated_students[i]={...students[i],status:"pass"};
            else
                 updated_students[i]={...students[i],status:"fail"};
   
    }
    return updated_students;
}   