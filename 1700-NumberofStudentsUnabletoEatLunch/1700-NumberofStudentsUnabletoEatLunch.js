            students.push(students.shift())
            unable++
            if(unable==students.length) break;
        }
    }
    return students.length
};
[
[1,1,0,0]
[0,1,0,1]
[1,1,1,0,0,1]
[1,0,0,0,1,1]
0
3
0
3
