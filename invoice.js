let cols=["no","item","Qty","Price","Total"]
let sub2=["sub_total","discount","balance","paid","remain"]
document.write("<table><thead><tr>")
cols.forEach((col)=>document.write(`<th>${col}</th>`))
document.write("</tr></thead><tbody>")
for(i=1; i<=5; i+=1){
document.write(`<tr><td>${i}</td><td contenteditable='true'></td><td class='qty' contenteditable='true'></td>
		<td class='pr' contenteditable='true'></td><td class='total'></td></tr>`)
}
document.write(`<tr><th rowspan='6' colspan='3'> Signature</th>`)
	sub2.forEach((sub,i)=>document.write(!(i%2==0)?`<tr><th>${sub}</th>
		<td class='subs' contenteditable='true'></td></tr>`:`<tr><th>${sub}</th><td class='subs'></td></tr>`))
document.write(`</tr>`)

document.write("</tbody></table>")
let qty=document.getElementsByClassName("qty")
let pr=document.getElementsByClassName("pr")
let total=document.getElementsByClassName("total")
let subs=document.getElementsByClassName("subs")
let sum=0
for(i=0; i<pr.length; i+=1){
	((index)=>{
		pr[index].addEventListener("blur",()=>{
			total[index].innerHTML=parseInt(qty[index].innerHTML)*parseInt(pr[index].innerHTML)
			sum+=parseInt(qty[index].innerHTML)*parseInt(pr[index].innerHTML);
			subs[0].innerHTML=sum
		})
	})(i)
}
for(j=0; j<subs.length; j+=1){
	((index)=>{
		subs[index].addEventListener("blur",()=>{
			subs[index+1].innerHTML=parseInt(subs[index-1].innerHTML)-parseInt(subs[index].innerHTML)
		})
	})(j)
}