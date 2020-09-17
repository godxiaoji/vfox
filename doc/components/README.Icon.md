# Icon

多选项目。

## Props

| 属性  | 类型          | 默认值 | 必填 | 说明                                                                                                  |
| ----- | ------------- | ------ | ---- | ----------------------------------------------------------------------------------------------------- |
| type  | string        |        | 是   | icon 的类型，有效值：success, success_no_circle, info, warn, waiting, cancel, download, search, clear |
| size  | number/string | 24     | 否   | icon 的大小，同 CSS 的 `--size`，优先级更高                                                           |
| color | string        |        | 否   | icon 的颜色，同 css 的 `--color`，优先级更高                                                          |

### type 的合法值

| 类型                | 示例                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success             | ​<svg class="icon" width="23px" height="23.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#09bb07" d="M512 65.983389c-245.919634 0-446.016611 200.095256-446.016611 446.016611 0 245.952318 200.064292 446.016611 446.016611 446.016611S958.016611 757.952318 958.016611 512C958.016611 266.080366 757.952318 65.983389 512 65.983389zM727.231286 438.432254 471.00766 697.439161c-0.063647 0.063647-0.192662 0.096331-0.25631 0.192662-0.096331 0.063647-0.096331 0.192662-0.192662 0.25631-2.048757 1.983389-4.575729 3.19957-6.944443 4.544765-1.183497 0.672598-2.143368 1.696116-3.392232 2.176052-3.839484 1.536138-7.904314 2.33603-11.967424 2.33603-4.095794 0-8.224271-0.799892-12.096439-2.399677-1.279828-0.543583-2.303346-1.632469-3.519527-2.303346-2.368714-1.343475-4.832039-2.528692-6.880796-4.544765-0.063647-0.063647-0.096331-0.192662-0.159978-0.25631-0.063647-0.096331-0.192662-0.096331-0.25631-0.192662l-126.016611-129.503454c-12.320065-12.672705-12.032791-32.928047 0.639914-45.248112 12.672705-12.287381 32.895364-12.063755 45.248112 0.639914l103.26354 106.112189 233.279613-235.839269c12.416396-12.576374 32.704421-12.703669 45.248112-0.25631C739.520387 405.600538 739.647682 425.85588 727.231286 438.432254z" /></svg> |
| success_no_circle ​ | <svg class="icon" width="23px" height="23.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#09bb07" d="M887.904744 298.20852c-12.863647-12.063755-33.151673-11.487488-45.215428 1.408843L415.935493 753.983819 182.815858 524.287381c-12.607338-12.416396-32.8644-12.287381-45.280796 0.319957-12.416396 12.576374-12.256417 32.8644 0.352641 45.248112l256.479935 252.671415c0.096331 0.096331 0.223626 0.127295 0.319957 0.223626s0.127295 0.223626 0.223626 0.319957c2.016073 1.919742 4.448434 3.008628 6.784464 4.288456 1.152533 0.672598 2.143368 1.663432 3.359548 2.143368 3.775837 1.47249 7.775299 2.239699 11.743798 2.239699 4.192125 0 8.384249-0.832576 12.287381-2.496009 1.312512-0.543583 2.33603-1.663432 3.552211-2.368714 2.399677-1.408843 4.895686-2.59234 6.944443-4.67206 0.096331-0.096331 0.127295-0.25631 0.223626-0.352641 0.063647-0.096331 0.192662-0.127295 0.287273-0.223626L889.277463 343.420508C901.439269 330.591265 900.768391 310.335923 887.904744 298.20852z" /></svg>                                                                                                                                                                                                                                                     |
| info ​              | <svg class="icon" width="23px" height="23.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#576b95" d="M512 65.983389c-245.952318 0-446.016611 200.064292-446.016611 446.016611S266.047682 958.016611 512 958.016611 958.016611 757.952318 958.016611 512 757.952318 65.983389 512 65.983389zM544.00086 736.00086c0 17.695686-14.303454 32.00086-32.00086 32.00086s-32.00086-14.303454-32.00086-32.00086L479.99914 448c0-17.695686 14.303454-32.00086 32.00086-32.00086 17.695686 0 32.00086 14.303454 32.00086 32.00086L544.00086 736.00086zM512 352.00086c-26.496224 0-48.00043-21.53689-48.00043-48.00043 0-26.527187 21.504206-48.00043 48.00043-48.00043s48.00043 21.471523 48.00043 48.00043C560.00043 330.46397 538.496224 352.00086 512 352.00086z" /></svg>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| warn ​              | <svg class="icon" width="23px" height="23.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#e64340" d="M942.656 769.376 602.112 159.584c-22.144-39.712-55.104-62.496-90.304-62.496-35.232 0-68.16 22.784-90.368 62.528L81.312 769.344c-22.016 39.456-24.256 79.456-6.112 110.4C93.344 910.624 129.664 928 174.88 928l674.24 0c45.184 0 81.536-17.376 99.648-48.256C966.944 848.8 964.672 808.832 942.656 769.376zM480 320c0-17.664 14.336-32 32-32s32 14.336 32 32l0 288c0 17.696-14.336 32-32 32s-32-14.304-32-32L480 320zM512 832.128c-26.528 0-48-21.504-48-48s21.472-48 48-48 48 21.504 48 48S538.528 832.128 512 832.128z" /></svg>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| waiting             | ​ <svg class="icon" width="23px" height="23.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#576b95" d="M511.913993 63.989249c-247.012263 0-447.924744 200.912481-447.924744 447.924744s200.912481 447.924744 447.924744 447.924744 447.924744-200.912481 447.924744-447.924744S758.926256 63.989249 511.913993 63.989249zM671.199059 575.903242 480.263397 575.903242c-17.717453 0-32.166639-14.449185-32.166639-32.166639L448.096758 289.15572c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 222.930287 159.285066 0c17.717453 0 31.994625 14.277171 31.994625 31.994625S688.916513 575.903242 671.199059 575.903242z" /></svg>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| cancel ​            | <svg class="icon" width="23px" height="23.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#353535" d="M512 960c-247.039484 0-448-200.960516-448-448S264.960516 64 512 64 960 264.960516 960 512 759.039484 960 512 960zM512 128.287273c-211.584464 0-383.712727 172.128262-383.712727 383.712727 0 211.551781 172.128262 383.712727 383.712727 383.712727 211.551781 0 383.712727-172.159226 383.712727-383.712727C895.712727 300.415536 723.551781 128.287273 512 128.287273zM557.05545 513.376159l138.367639-136.864185c12.576374-12.416396 12.672705-32.671738 0.25631-45.248112s-32.704421-12.672705-45.248112-0.25631l-138.560301 137.024163-136.447897-136.864185c-12.512727-12.512727-32.735385-12.576374-45.248112-0.063647-12.512727 12.480043-12.54369 32.735385-0.063647 45.248112l136.255235 136.671523-137.376804 135.904314c-12.576374 12.447359-12.672705 32.671738-0.25631 45.248112 6.271845 6.335493 14.496116 9.504099 22.751351 9.504099 8.12794 0 16.25588-3.103239 22.496761-9.247789l137.567746-136.064292 138.687596 139.136568c6.240882 6.271845 14.432469 9.407768 22.65674 9.407768 8.191587 0 16.352211-3.135923 22.591372-9.34412 12.512727-12.480043 12.54369-32.704421 0.063647-45.248112L557.05545 513.376159z" /></svg>           |
| download ​          | <svg class="icon" width="23px" height="23.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#353535" d="M512 960C264.96 960 64 759.04 64 512S264.96 64 512 64s448 200.96 448 448S759.04 960 512 960zM512 128C300.256 128 128 300.256 128 512c0 211.744 172.256 384 384 384 211.744 0 384-172.256 384-384C896 300.256 723.744 128 512 128zM694.56 522.144c-12.544-12.608-33.376-12.64-45.952-0.064L544 625.984 544 319.328c0-17.76-14.208-32.16-32-32.16-17.76 0-32 14.4-32 32.16l0 308.32-105.216-106.688c-12.48-12.608-32.704-12.736-45.312-0.256C316.832 533.216 316.8 553.6 329.28 566.208l159.36 161.056c6.272 6.336 14.592 9.568 22.88 9.568 8.16 0 16.384-3.168 22.624-9.312 0.032-0.064 0.032-0.064 0.064-0.128 0.032 0 0.064 0 0.096-0.064l160.192-159.68C707.072 555.104 707.104 534.72 694.56 522.144z" /></svg>                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| search ​            | <svg class="icon" width="23px" height="23.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#888888" d="M953.474215 908.234504l-152.576516-163.241391c61.92508-74.48211 95.81186-167.36973 95.81186-265.073744 0-229.294809-186.63531-415.930119-416.102133-415.930119-229.294809 0-415.930119 186.63531-415.930119 415.930119s186.63531 415.930119 415.930119 415.930119c60.032925 0 118.00168-12.55703 172.186125-37.327062 16.169326-7.396607 23.221905-26.318159 15.825298-42.315471-7.396607-16.169326-26.318159-23.221905-42.315471-15.825298-45.927768 20.813707-94.951789 31.478582-145.695952 31.478582-194.031917 0-351.94087-157.908953-351.94087-351.94087 0-194.031917 157.908953-351.94087 351.94087-351.94087 194.031917 0 351.94087 157.908953 351.94087 351.94087 0 91.339493-34.918864 177.86259-98.048043 243.743995-12.213002 12.729044-11.868974 33.026709 0.860071 45.239711 1.032085 0.860071 2.236183 1.204099 3.268268 2.064169 0.860071 1.204099 1.376113 2.752226 2.408198 3.956325l165.477574 177.00252c6.192508 6.70855 14.793214 10.148833 23.393919 10.148833 7.912649 0 15.653284-2.92424 21.845792-8.600706C964.827146 941.433227 965.515202 921.135562 953.474215 908.234504z" /></svg>                                            |
| clear               | <svg class="icon" width="23px" height="23.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#888888" d="M512 64c-247.00852 0-448 200.960516-448 448S264.960516 960 512 960c247.00852 0 448-200.960516 448-448S759.039484 64 512 64zM694.752211 649.984034c12.480043 12.54369 12.447359 32.768069-0.063647 45.248112-6.239161 6.208198-14.399785 9.34412-22.591372 9.34412-8.224271 0-16.415858-3.135923-22.65674-9.407768l-137.60043-138.016718-138.047682 136.576912c-6.239161 6.14455-14.368821 9.247789-22.496761 9.247789-8.255235 0-16.479505-3.168606-22.751351-9.504099-12.416396-12.576374-12.320065-32.800753 0.25631-45.248112l137.887703-136.384249-137.376804-137.824056c-12.480043-12.512727-12.447359-32.768069 0.063647-45.248112 12.512727-12.512727 32.735385-12.447359 45.248112 0.063647l137.567746 137.984034 138.047682-136.575192c12.54369-12.447359 32.831716-12.320065 45.248112 0.25631 12.447359 12.576374 12.320065 32.831716-0.25631 45.248112L557.344443 512.127295 694.752211 649.984034z" /></svg>                                                                                                                                                                                                                                    |

## CSS

| 属性    | 默认值 | 说明       |
| ------- | ------ | ---------- |
| --color |        | 图标填充色 |
| --size  | 24     | 图标大小   |