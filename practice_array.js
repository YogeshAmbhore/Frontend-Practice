let arr = [4, 5, 2, 6, 1, 5, 9];

function bubble_sort(arr) {
    for(let i = 0; i <= arr.length; i++){
        for (let j = 0; j <= arr.length-i-1; j++){
            if (arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

            }
        }
    }

    console.log(arr);
}

bubble_sort(arr);