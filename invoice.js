titles=["No","Item","Qty","Price","Total"]
subs=["Sub total","Discount","Balance","Paid","Remiain"]
document.write("<table><thead><tr>")
	titles.forEach((t)=>document.write(`<th>${t}</th>`))
document.write("</tr></thead><tbody>")
for(i=1; i<=5; i+=1){
	document.write(`<tr>`)		
		titles.forEach((col,x)=>document.write(x==0 || x==4?x==0?`<td class='${col}'>${i}</td>`:`<td class='${col}'></td>`:`<td contenteditable='true' class='${col}'></td>`))		
	document.write(`</tr>`)
}
document.write(`<tr><th rowspan='${subs.length+1}' colspan='3'>Signagute</th>`)
	subs.forEach((s,i)=>document.write(!(i%2==0)?`<tr><th>${s}</th><td class='sub' contenteditable='true'></td></tr>`:`<tr><th>${s}</th><td class='sub'></td></tr>`))
document.write("</tr>")
document.write("</tbody></table>")
total=document.getElementsByClassName("Total")
price=document.getElementsByClassName("Price")
qty=document.getElementsByClassName("Qty")
sub=document.getElementsByClassName("sub")

for(y=0; y<price.length; y+=1){
	((index)=>{
		number=0;
		price[index].addEventListener("blur",()=>{
			total[index].innerHTML=parseInt(price[index].innerHTML)*parseInt(qty[index].innerHTML)
			number+=parseInt(price[index].innerHTML)*parseInt(qty[index].innerHTML)
			sub[0].innerHTML=number
		})
	})(y)
}

for(j=0; j<sub.length; j+=1){
	((index)=>{
		sub[index].addEventListener("blur",()=>{
			sub[index+1].innerHTML=parseInt(sub[index-1].innerHTML)-parseInt(sub[index].innerHTML)
		})
	})(j)
}