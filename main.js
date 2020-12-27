//ソートされた配列
a = ["あ","け","ま","し","て","お","め","で","と","う",
    "こ","と","し","も","よ","ろ","し","く"];


const button = document.getElementById("button");

button.addEventListener("click" ,()=> {
    //取り出す範囲(箱の中)を末尾から狭める繰り返し
for(i = a.length -1;i>0;i--){
    //乱数生成を使ってランダムに取り出す値を決める
    r = Math.floor(Math.random()*(i+1));
    //取り出した値と箱の外の先頭の値を交換する
    tmp = a[i];
    a[i] = a[r];
    a[r] = tmp;
}
    document.getElementById("question").textContent = a.join("");
});

