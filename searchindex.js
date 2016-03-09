Search.setIndex({envversion:47,filenames:["analysis/index","api/ctapipe.configuration.Configuration","api/ctapipe.configuration.ConfigurationException","api/ctapipe.coordinates.CameraFrame","api/ctapipe.coordinates.GroundFrame","api/ctapipe.coordinates.TelescopeFrame","api/ctapipe.coordinates.TiltedTelescopeFrame","api/ctapipe.core.Container","api/ctapipe.core.component","api/ctapipe.instrument.obsconfig.ArrayConfig","api/ctapipe.instrument.obsconfig.ArrayTriggerConfig","api/ctapipe.instrument.obsconfig.BaseConfig","api/ctapipe.instrument.obsconfig.CameraConfig","api/ctapipe.instrument.obsconfig.ObsConfig","api/ctapipe.instrument.obsconfig.OpticsConfig","api/ctapipe.instrument.obsconfig.SimObsConfig","api/ctapipe.instrument.obsconfig.SubarrayConfig","api/ctapipe.instrument.obsconfig.TelescopeConfig","api/ctapipe.instrument.obsconfig.TelescopeTriggerConfig","api/ctapipe.instrument.obsconfig.get_site_id_for_run","api/ctapipe.instrument.obsconfig.get_site_id_for_time","api/ctapipe.io.camera.CameraGeometry","api/ctapipe.io.camera.make_rectangular_camera_geometry","api/ctapipe.io.containers.MCShowerData","api/ctapipe.io.containers.RawCameraData","api/ctapipe.io.containers.RawData","api/ctapipe.io.hessio.hessio_event_source","api/ctapipe.reco.HighOrderMomentParameters","api/ctapipe.reco.MomentParameters","api/ctapipe.reco.generate_2d_shower_model","api/ctapipe.reco.hillas_parameters","api/ctapipe.reco.make_mock_shower_image","api/ctapipe.reco.mock.generate_2d_shower_model","api/ctapipe.reco.mock.make_mock_shower_image","api/ctapipe.tools.info","api/ctapipe.visualization.ArrayDisplay","api/ctapipe.visualization.CameraDisplay","calib/index","configuration/index","coordinates/index","core/index","datasets/index","development/code-guidelines","development/futureplans","development/index","development/maintainer-info","development/style-guide","development/support-libraries","getting_started/index","index","instrument/index","io/index","reco/index","tools/index","visualization/index"],objects:{"ctapipe.configuration":{Configuration:[1,9,1,""],ConfigurationException:[2,13,1,""]},"ctapipe.configuration.Configuration":{COMMENT_INDEX:[1,12,1,""],DATAIMPL:[1,12,1,""],DEFAULT:[1,12,1,""],FITS:[1,12,1,""],HEADERIMPL:[1,12,1,""],INI:[1,12,1,""],VALUE_INDEX:[1,12,1,""],add:[1,10,1,""],dynamic_class_from_module:[1,10,1,""],get:[1,10,1,""],get_comment:[1,10,1,""],get_list:[1,10,1,""],get_section_list:[1,10,1,""],has_key:[1,10,1,""],list:[1,10,1,""],parse_args:[1,10,1,""],read:[1,10,1,""],write:[1,10,1,""]},"ctapipe.coordinates":{CameraFrame:[3,9,1,""],GroundFrame:[4,9,1,""],TelescopeFrame:[5,9,1,""],TiltedTelescopeFrame:[6,9,1,""]},"ctapipe.coordinates.CameraFrame":{default_representation:[3,12,1,""],frame_specific_representation_info:[3,12,1,""],name:[3,12,1,""]},"ctapipe.coordinates.GroundFrame":{default_representation:[4,12,1,""],frame_attributes:[4,12,1,""],frame_specific_representation_info:[4,12,1,""],name:[4,12,1,""],observatory_location:[4,12,1,""]},"ctapipe.coordinates.TelescopeFrame":{default_representation:[5,12,1,""],focal_length:[5,12,1,""],frame_attributes:[5,12,1,""],frame_specific_representation_info:[5,12,1,""],name:[5,12,1,""]},"ctapipe.coordinates.TiltedTelescopeFrame":{default_representation:[6,12,1,""],frame_attributes:[6,12,1,""],frame_specific_representation_info:[6,12,1,""],name:[6,12,1,""],pointing_direction:[6,12,1,""],telescope_location:[6,12,1,""]},"ctapipe.core":{Container:[7,9,1,""],component:[8,11,1,""]},"ctapipe.core.Container":{add_item:[7,10,1,""],meta:[7,12,1,""]},"ctapipe.instrument":{obsconfig:[50,8,0,"-"]},"ctapipe.instrument.obsconfig":{ArrayConfig:[9,9,1,""],ArrayTriggerConfig:[10,9,1,""],BaseConfig:[11,9,1,""],CameraConfig:[12,9,1,""],ObsConfig:[13,9,1,""],OpticsConfig:[14,9,1,""],SimObsConfig:[15,9,1,""],SubarrayConfig:[16,9,1,""],TelescopeConfig:[17,9,1,""],TelescopeTriggerConfig:[18,9,1,""],get_site_id_for_run:[19,11,1,""],get_site_id_for_time:[20,11,1,""]},"ctapipe.instrument.obsconfig.ArrayConfig":{num_tels:[9,12,1,""],tel:[9,10,1,""]},"ctapipe.instrument.obsconfig.CameraConfig":{load_from_file:[12,14,1,""]},"ctapipe.io":{camera:[51,8,0,"-"],containers:[51,8,0,"-"],hessio:[51,8,0,"-"]},"ctapipe.io.camera":{CameraGeometry:[21,9,1,""],make_rectangular_camera_geometry:[22,11,1,""]},"ctapipe.io.camera.CameraGeometry":{from_file:[21,15,1,""],from_name:[21,15,1,""],guess:[21,15,1,""],rotate:[21,10,1,""],to_table:[21,10,1,""]},"ctapipe.io.containers":{MCShowerData:[23,9,1,""],RawCameraData:[24,9,1,""],RawData:[25,9,1,""]},"ctapipe.io.hessio":{hessio_event_source:[26,11,1,""]},"ctapipe.reco":{HighOrderMomentParameters:[27,9,1,""],MomentParameters:[28,9,1,""],generate_2d_shower_model:[29,11,1,""],hillas_parameters:[30,11,1,""],make_mock_shower_image:[31,11,1,""],mock:[52,8,0,"-"]},"ctapipe.reco.mock":{generate_2d_shower_model:[32,11,1,""],make_mock_shower_image:[33,11,1,""]},"ctapipe.tools":{info:[34,11,1,""]},"ctapipe.visualization":{ArrayDisplay:[35,9,1,""],CameraDisplay:[36,9,1,""]},"ctapipe.visualization.ArrayDisplay":{values:[35,12,1,""]},"ctapipe.visualization.CameraDisplay":{add_colorbar:[36,10,1,""],add_ellipse:[36,10,1,""],cmap:[36,12,1,""],enable_pixel_picker:[36,10,1,""],image:[36,12,1,""],norm:[36,12,1,""],on_pixel_clicked:[36,10,1,""],overlay_moments:[36,10,1,""],set_limits_minmax:[36,10,1,""],set_limits_percent:[36,10,1,""],show:[36,10,1,""],update:[36,10,1,""]},ctapipe:{analysis:[0,8,0,"-"],calib:[37,8,0,"-"],configuration:[38,8,0,"-"],coordinates:[39,8,0,"-"],core:[40,8,0,"-"],reco:[52,8,0,"-"],tools:[53,8,0,"-"],visualization:[54,8,0,"-"]}},objnames:{"0":["np","module","Python module"],"1":["np","class","Python class"],"10":["py","method","Python method"],"11":["py","function","Python function"],"12":["py","attribute","Python attribute"],"13":["py","exception","Python exception"],"14":["py","staticmethod","Python static method"],"15":["py","classmethod","Python class method"],"2":["np","method","Python method"],"3":["np","function","Python function"],"4":["np","attribute","Python attribute"],"5":["np","exception","Python exception"],"6":["np","staticmethod","Python static method"],"7":["np","classmethod","Python class method"],"8":["py","module","Python module"],"9":["py","class","Python class"]},objtypes:{"0":"np:module","1":"np:class","10":"py:method","11":"py:function","12":"py:attribute","13":"py:exception","14":"py:staticmethod","15":"py:classmethod","2":"np:method","3":"np:function","4":"np:attribute","5":"np:exception","6":"np:staticmethod","7":"np:classmethod","8":"py:module","9":"py:class"},terms:{"0x1131e2d30":5,"0x1131e2d68":6,"0x1131e2e10":6,"0x1131e2f28":4,"12d":21,"35d":54,"3rd":36,"40d":52,"__dict__":1,"__init__":7,"__main__":54,"__name__":54,"_actionscontain":38,"_attributehold":38,"_build":45,"_entri":1,"_immutable_":42,"_io":1,"_struct_":42,"case":[42,47,52],"class":[0,1,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,21,23,24,25,27,28,35,36,37],"default":[1,7,36,42,47,54],"final":26,"float":[21,22,29,32,36],"function":[0,31,33,36,37,38],"import":[39,45,52,54],"int":[21,22,24,25,26,31,33],"long":47,"new":[7,36,42,48],"return":[1,22,29,30,31,32,33],"static":12,"super":39,"switch":48,"true":[1,35,36],"try":47,abil:36,about:[21,29,32,36],accept:[39,47],access:[7,36,43,44],accumul:7,achiev:43,activ:48,adc:24,adc_sampl:24,adc_sum:24,add:[0,1,7,36,37,41,53],add_argu:1,add_colorbar:[36,54],add_ellips:36,add_item:7,addition:50,adjac:21,advanc:47,after:[21,42],aid:20,algebra:47,algorhtm:47,algorithm:[21,47,52],all:[1,7,9,13,24,26,39,42,46,47],allow:[36,48],allow_pick:36,allowed_tel:26,alreadi:1,also:[1,7,41,42,46,48,50],altern:30,anaconda:[47,48],angl:[21,29,32,36],ani:[21,36,42,47],anoth:[39,48],antialias:36,anywher:48,appli:54,appropri:[21,46],arbitrarili:7,area:[21,54],aren:39,arg:[1,3,4,5,6],argpars:[1,38],argument:[1,36],argumentpars:[1,38],argv:1,arrai:[9,19,20,21,24,31,33,35,36,39,42,50,52,54],array_lik:[30,36],arrayfil:54,arrow:50,ascii:47,assign:1,associ:[7,50],assum:48,astronom:44,astropi:[3,4,5,6,20,21,29,32,39,42,47,48,49,54],asymmetri:[27,36],atlassian:49,attribut:[1,3,4,5,6,7,9,35,36,42],attributeerror:7,auto:36,automat:[7,36,46,47],autopep8:46,autoscal:36,autoupd:[35,36],aver:20,avoid:47,axi:[29,32,36],base:[1,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,21,23,24,25,27,28,35,36,47],baseconfig:[9,10],basecoordinatefram:[3,4,5,6],basefram:[4,5,6],basic:42,becaus:[41,42,45],been:7,best:36,between:[7,21,50,54],bit:[7,54],blank:7,blue:50,bool:36,both:47,browser:48,bsd:49,buffer:46,bug:49,build:[45,48],build_doc:45,built:[9,39,47],calcul:44,call:[1,7,21,36,47,48],cam_id:21,camera:[3,12,17,21,22,24,29,31,32,33,36,50],camera_coord:39,can:[1,7,21,26,29,32,36,39,42,43,45,46,47,48,52],cannot:[1,7,42],care:42,carlo:[16,26,50,51],celeri:43,cen_i:28,cen_x:28,center:21,centroid:[29,32,36,52,54],chang:[36,42,48,49,50],channel:24,characterist:[12,14],check:[1,30,47,48],cherenkov:[21,54],choic:49,choos:48,chosen:47,classif:47,classmethod:21,clean:[45,54],clear:41,click:36,clockwis:36,clone:48,cluster:47,cmap:36,code:41,collect:[36,42,45],colobar:36,color:[36,54],colorbar:[36,52],colormap:36,column:[42,47,52],com:[41,48,49],command:[41,45,46,48,49],comment:1,comment_index:1,commun:47,complex:[42,43,47],compon:7,comput:30,conda:48,config:50,conform:46,consist:52,consol:34,construct:[21,42],constructor:36,contain:[0,1],content:1,contin:7,continu:47,contribut:48,control:48,conveni:51,convert:[1,21,29,32],convolut:47,coordin:[3,4,5,6,21,22,29,30,32],copi:[1,48,54],core:[7,8,23,24,25],correct:[39,41],correspond:[1,30,31,33,36,41],coupl:41,creat:[1,29,32,36,48,54],cross:47,cta:[26,39,41,47,48],ctasoft:48,current:[1,26,47,51],cyan:54,data:[7,21,24,25,26,36],databas:21,dataimpl:1,decid:41,decis:47,decor:8,def:54,default_represent:[3,4,5,6],defin:[7,42,50,52],definit:[12,14,36,39,40,50],deg:21,depend:[34,48],deprec:25,describ:50,descript:[0,7,9,16,21,37,53],design:[1,49],detail:[1,41],determin:1,dev385:49,develop:41,development_workflow:49,dict:[7,24,25,42,52],dictionari:[1,25,42],differ:[50,52],dimens:22,dimension:47,dimensionless:39,dir:48,direction:36,directli:36,directori:[1,41,48],discret:47,disp:54,displai:[21,35,36,54],distribut:[43,47,48,49],divid:39,doc:44,docstr:46,document:[1,3,4,5,6,7,9,12,21,35,36,44],doesn:45,don:[42,45],done:48,download:41,draw:[36,54],draw_neighbor:54,dtype:42,dure:16,dynam:50,dynamic_class_from_modul:1,each:[7,21,25,42,50,52],easi:[41,45,47],edit:48,effici:[36,39,47],either:[21,36,48],elaps:39,electron:[31,33],ellips:[36,54],elpi:46,emac:46,emul:26,enabl:[36,46],enable_pixel_pick:36,encod:1,end:30,ensur:47,entri:1,env:48,environ:48,equival:45,erfa:39,etc:[21,47,54],even:41,event:[25,26,52,54],event_id:25,eventio:26,everi:50,everyth:48,exactli:1,exagger:54,exampl:[0,20,26,30,37,39,41,46,48,49,52,53,54],except:[2,39],execnet:43,exist:1,exit:1,expect:49,explain:34,explan:41,explic:36,explor:[43,49],extend:50,extens:47,extra:[41,50],factor:[31,33,52],fake:[52,54],fals:[1,34,36],fascet:14,fast:[36,43,47],featur:49,fetch:[41,48],figsiz:[52,54],figur:[36,52,54],figure_api:36,file:[1,21,26,36,41,42,43,47,48,51],filenam:[1,21,36],fill:42,filter:47,find:48,first:[45,48,50],fit:[1,42,44],fitsio:47,fix:42,flag:1,flexibl:[7,42],flush:1,focal:[5,39],focal_length:[5,39],folder:41,follow:[42,45,46,47,48],fontsiz:54,fork:39,format:[1,26,31,33,42,46,47,54],formerli:47,forrest:47,forseen:9,found:[21,47],frame:[3,4,5,6,39,47],frame_attribut:[4,5,6],frame_specific_representation_info:[3,4,5,6],frameattribut:[4,5,6],friendli:47,from:[1,7,15,21,24,26,31,33,36,39,42,45,48,49,51,52,54],from_fil:21,from_nam:[21,54],full:54,func:[31,33],further:48,furthermor:42,gain:24,gamma:36,gap:21,gaussian:[29,32],gener:[7,21,22,26,31,33,36,41,47],generalis:39,geom:[31,33,52,54],geometri:[12,21,22,31,33,36,51],get_com:1,get_list:1,get_path:54,get_section_list:1,ggplot:54,ghp:45,git:[41,48,49],github:[41,45,48,49],given:[1,10,18,19,20,30,31,33,41],graphic:36,green:[50,54],ground:4,guess:21,guid:[42,44],gwc:39,hack:48,has_kei:1,hash:41,have:[7,21,41,42,45,47],hdf5:42,hdf:47,hdfs3:43,hdu:54,headerimpl:1,help:38,helper:36,here:[41,42,48,52],hess:54,hessio:26,hexagon:21,hierarchi:50,high:[0,37,46,47,53],hilla:[30,36,52,54],hillas_paramet:[27,28],hillas_parameters_2:[27,28],hillla:30,hire:[52,54],hold:7,home:[1,41,48],hot:36,how:[1,44],howev:[7,36,47],html:[36,45,47,48,49],http:[36,41,47,48,49],iau:39,identif:21,ignor:1,imag:[21,29,30,31,32,33,36,51,52,54],impl:1,implement:[1,30,36,39,41,47,52,54],imshow:52,includ:[1,9,12,14,17,21,36,39,41,42,47,50,52],independ:48,index:47,indic:54,info:[10,18],inform:[13,14,21,48,50,54],ini:1,init:[41,48],initi:[1,7,36],input:[39,49],insid:50,inspir:41,instal:[45,47,48,51],instanc:[1,7,36],instead:[1,47],instruct:[45,51],instrument:[9,10,11,12,13,14,15,16,17,18,19,20,21,49],integr:[24,47],intend:[21,36,47],intens:[31,33,52,54],interfac:47,interleav:26,intern:39,interpol:[47,52],ipython:41,item:[1,7,50],iter:7,joblib:43,just:[30,45,52],keep:[30,41,52],kei:[1,7,36],keyword:36,known:36,kurtosi:27,kwarg:[3,4,5,6,7,36,54],label:54,larg:[39,47,49],later:[49,50],latest:[48,49],launch:38,layout:[50,51],learn:44,length:[5,28,29,32,36,39,52,54],level:[0,31,33,36,37,46,47,50,52,53],lib:48,libcfitsio:47,librari:[36,39,43,44],licens:[39,49],like:[7,42,43,47,48,51,54],limit:36,lin:36,linalg:47,line:[41,46,48,49],linear:[36,47],linewidth:[36,54],list:[1,21,25,26,39,42,47],load:[47,50,54],load_from_fil:12,loadabl:50,local:[45,48],locat:[1,41],log:36,logarithm:36,logic:42,look:50,lookup:[19,20],low:[36,47],lower:52,machin:[41,44],mai:[1,43,50,54],main:[45,54],maintain:44,major:[29,32,36],make:[7,41,44],make_mock_shower_imag:29,manag:42,mani:46,map:[36,43,52],mark:47,math:44,mathemat:47,matplotlib:[36,48,52,54],matur:47,max:[22,36],max_ev:26,maximum:[26,36],mayb:39,mc_run_id:15,mean:[42,48,54],member:[7,42],merg:[25,48],met:39,meta:7,metadata:[7,38],meter:22,method:[1,7,9,12,21,36,42,50,54],min:[22,36],miniconda:48,minim:47,minor:[29,32,36],mirror:[14,54],mirrorarea:[35,54],miss:28,mission:39,mjd_offset:39,mkdir:48,mock:[32,33],mode:[1,36,46,48],model:[29,31,32,33,39,47,54],modifi:21,modul:[38,40,46,47],moment:[27,28,36],momentparamet:27,momparam:36,mont:[16,26,50,51],more:[7,42,43,47,52,54],most:[36,39,48],move:51,msg:2,multi:47,multipli:[31,33],multivari:44,must:[1,7,42,47,48],mva:47,n_pixel:24,n_sampl:24,name:[1,3,4,5,6,7,21,23,25,42,48,52,54],namedtipl:52,namedtupl:42,namespac:1,ndarrai:[25,42,47],nearest:[47,52],nearli:[42,47],necessari:36,need:[36,42,45,50],neigh:54,neighbor:[21,47,54],next:[48,50],nice:36,nois:52,non:[24,46],none:[1,4,6,7,26,35,36],norm:36,normal:36,note:[36,39,41,45],notebook:41,now:[45,48],npix_i:22,npix_x:22,nsb:[31,33],nsb_level_p:[31,33,52,54],num_channel:24,num_tel:9,number:[21,22,24,25,26],numer:47,numpi:[42,46,47,54],object:[1,4,5,6,7,11,21,22,29,31,32,33,35,36,39,42,50],obsconfig:[9,10,11,12],observ:[13,16,50],observatori:[41,48,49,51],observatory_loc:4,obstim:20,on_pixel_click:36,onc:[36,39],ones_lik:54,onli:[1,26,42,45],onlin:44,open:[1,26,39,48],oper:47,optic:[14,17],optim:47,option:[1,26],order:[27,28,36],ordereddict:[4,5,6],org:[36,47,48,49],origin:52,other:[1,12,48],otherwis:[7,36],our:41,out:[41,48],output:[36,49],over:7,overal:[9,14],overid:36,overlai:[36,54],overlay_mo:[36,54],own:50,page:[45,47],pair:1,paramet:[1,7,21,22,24,25,26,27,28,29,30,31,32,33,36,38,54],parameter:[36,52,54],pars:[1,38],parse_arg:1,particular:16,particularli:39,pass:[7,29,32,36,39],pass_configur:1,patch:36,patchcollect:36,path:26,pdf:[29,31,32,33,36,47,52,54],pedest:[31,33],pep8:46,per:26,percent:36,perceptron:47,perform:[30,36],permiss:45,phi:28,photo:[31,33],pip:[45,47],pipelin:[38,47],pix:21,pix_area:21,pix_i:[21,30,54],pix_id:[21,36],pix_typ:21,pix_x:[21,30,54],pixel:[12,21,22,30,36,54],pixel_index:54,pixel_po:25,place:21,plot:[36,52,54],plt:[36,52,54],png:[36,52,54],point:39,pointing_direct:6,polygon:36,popul:1,posit:[21,29,32,36,54],possibl:[36,41,50],potenti:1,powernorm:36,pre:52,precis:39,present:25,prevent:7,previou:1,print:[1,34,39,52,54],priori:7,process:[43,47,49],procss:52,prod2_telconfig:54,prod:54,product:[16,51],program:1,project:[38,47,48],propeg:47,provid:[7,42,47,51,54],psi:[28,29,32,52,54],publish:45,pull:[48,49],purpos:[7,52],put:[36,41,48],pyfit:47,pyhessio:[48,51],pylab:54,pyplot:52,python:[1,7,42,45,46,48,49,51],quantiti:[5,21,47],quick:47,radian:36,random:47,rang:36,range_i:22,range_x:22,rapid:49,rather:36,raw:[24,25],read:[1,26,38,42,47,51,54],readthedoc:[45,48,49],realli:54,reason:[41,47],reco:[27,28,29,30,31,32,33,36],recommend:[47,48],reconstruct:49,rectangular:[21,22],red:[36,54],redraw:36,reduc:43,reduct:47,reformat:46,regist:7,regress:47,rel:36,relat:[13,50,51,54],relationship:50,releas:44,rememb:45,remot:[43,48],remov:42,render:[36,54],repo:[41,45,48],report:49,request:49,requir:[48,51],rescal:36,resolv:52,restructuredtext:46,result:[31,33,39,52],right:41,robust:47,rotat:[21,29,32,36],routin:39,row:47,run:[13,15,19,25,48,50],run_id:[13,16,19,25],run_typ:[10,18],runtim:42,same:[31,33,46,48],sampl:[24,47],save:36,savefig:36,scale:[20,36,54],scikit:[47,48],scipi:[29,32,47,48],script:48,seagreen:54,search:1,second:28,section:1,section_nam:1,see:[1,36,41,42,45,48,51],select:[26,36],self:[1,7,21,36],separ:41,serial:7,servic:1,set:[36,39,42,47,48,54],set_limits_:36,set_limits_minmax:[36,54],set_limits_perc:36,set_xlim:54,set_ylim:54,setup:[38,41,45,48],sever:41,shape:[21,52],share:40,sherpa:41,should:[7,42,45,46,47,48,50,52],show:[36,48,50,52,54],shower:[27,28,29,30,31,32,33,52,54],shower_model:[31,33],showermodel:52,showerpdf:[31,33],side:36,sig:54,signal:[36,47,52],silent:1,simpl:[22,39,43,47,52],simtelarrai:51,simtelarrrai:48,simul:15,sinc:36,singl:[1,17,24,54],site:[41,48,50],site_id:[9,12,14,17],size:28,skew:27,slow:36,small:[41,47],sofa:39,softwar:48,solidifi:47,solut:41,some:[39,42,45,51],somehow:52,someth:[36,48],soon:51,sound:41,sourc:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,29,31,32,33,34,35,36,39,48,52,54],spatial:47,special:[1,36,47],specif:[39,47],specifi:[1,7,21],speed:[36,47],sphinx:46,squar:21,stabl:[41,47,49],standard:[21,26,39,46],stat:[29,32,44],statist:[29,31,32,33,47],statistc:47,statu:47,stdout:1,step:45,storag:[24,25],store:[21,38,48],str:[1,7,26,36],stream:[26,43],string:[1,21],struct:[7,42],structur:[7,36],stupid:54,style:[36,42,43,44],sub:[7,36,42,48,50],subarrai:[9,16],subclass:42,submodul:41,subpackag:47,subplot:52,subset:26,subtract:[31,33],successfulli:1,suitabl:[1,42],summari:[1,3,4,5,6,7,9,12,21,35,36],superflu:42,support:[36,41,42,44],sure:48,surfac:21,symbol:1,symlink:48,sync:49,syntax:7,system:[1,39,43,48],tabl:[1,21,42,44],tag:41,taken:1,target:45,techniqu:47,tel:[9,25,54],tel_id:[9,12,14,17,21,24,25],telescop:[5,6,9,14,17,21,24,25,26,35,50,54],telescope_coord:39,telescope_level0:54,telescope_loc:6,teli:[35,54],telid:54,tels_with_data:25,telx:[35,54],term:47,terrestri:39,test:[22,41,47,48,52],text:54,textiowrapp:1,than:36,thei:[1,26,42,47],them:[1,39,45,48,52,54],therefor:[36,42],thi:[1,7,9,21,26,36,38,39,41,45,48,49,50,51,52,54],thing:[48,52],third:27,those:[21,51],threshold:54,thrown:7,tid:54,tight_layout:54,tilt:6,time:[20,39,45,47],titl:[35,36,52,54],to_tabl:21,todo:[0,34,37],tool:[34,38,43,48,49],top:[35,36],town:35,train:47,transform:[39,47],transform_to:39,tree:47,tricki:41,trigger:[10,18],tupl:[27,28,42],turn:43,tutori:49,two:[41,52],type:[1,7,21,31,33,41,42,50],under:47,unifi:52,unit:[21,39,42,47],unlik:42,until:47,updat:[36,41,44],upload:45,upon:47,url:26,user:[1,7,36,41,47,48],usual:48,utc:20,utf:1,util:[38,41,46,51,52,54],valu:[1,7,21,30,35,36,54],value_index:1,variabl:[1,7],variat:47,varieti:47,variou:[34,49,54],vector:47,veri:[36,42,43,47],version:[9,12,14,17,19,20,34,41,48,49,50],via:[36,42,43,47],view:35,virtual:[36,48],virtualenv:48,visual:[35,36,49,52],vmax:36,vmin:36,want:[39,47,48],warn:[1,45],web:48,well:[21,41,42,47],what:1,when:[36,38,46,47,50],where:[26,42,48],wherea:26,whether:[1,36],which:[19,20,25,39,41,42,43,45,47,48,50],white:50,wide:[1,47],width:[28,29,32,36,52,54],wise:47,within:46,work:[7,21,41,45,48,51],workflow:49,world:39,would:26,wrapper:[47,51,52],write:[1,42,45],written:46,wrt:36,www:49,xxx_exampl:48,yet:[39,47,49],you:[1,7,36,45,48],your:48,zmax:36,zmin:36},titles:["Analysis","Configuration","ConfigurationException","CameraFrame","GroundFrame","TelescopeFrame","TiltedTelescopeFrame","Container","component","ArrayConfig","ArrayTriggerConfig","BaseConfig","CameraConfig","ObsConfig","OpticsConfig","SimObsConfig","SubarrayConfig","TelescopeConfig","TelescopeTriggerConfig","get_site_id_for_run","get_site_id_for_time","CameraGeometry","make_rectangular_camera_geometry","MCShowerData","RawCameraData","RawData","hessio_event_source","HighOrderMomentParameters","MomentParameters","generate_2d_shower_model","hillas_parameters","make_mock_shower_image","generate_2d_shower_model","make_mock_shower_image","info","ArrayDisplay","CameraDisplay","Calibration","Configuration","Coordinates","Core Data Structures","Datasets","Code Guidelines","Future Plans","Development Resources","Maintainer info","Style Guide","Support Libraries","Getting Started","CTA Experimental Pipeline Framework (<code class=\"docutils literal\"><span class=\"pre\">ctapipe</span></code>)","Instrument","Input/Output","Reconstruction","Command line tools","Visualization"],titleterms:{"class":[38,39,40,50,51,52,54],"function":[40,50,51,52,53],acc:51,access:47,analysi:[0,47],api:[0,37,38,39,40,41,46,50,51,52,53,54],arrayconfig:9,arraydisplai:35,arraytriggerconfig:10,astronom:47,baseconfig:11,calcul:47,calib:37,calibr:37,camera:51,cameraconfig:12,cameradisplai:36,camerafram:3,camerageometri:21,code:[42,46],command:53,compon:8,configur:[1,38],configurationexcept:2,contain:[7,51],content:47,coordin:39,core:40,cta:49,ctapip:[0,37,38,39,40,49,50,51,52,53,54],data:[40,42,51],dataset:41,develop:[44,49],diagram:[38,40,50],doc:45,document:[46,49],experiment:49,fit:47,framework:49,futur:43,gener:49,generate_2d_shower_model:[29,32],get:[0,37,38,39,41,48,50,52,53,54],get_site_id_for_run:19,get_site_id_for_tim:20,groundfram:4,guid:46,guidelin:42,help:49,hessio:51,hessio_event_sourc:26,highordermomentparamet:27,hillas_paramet:30,how:45,info:[34,45],inherit:[38,40,50],input:51,instrument:50,introduct:[0,37,38,39,40,41,50,51,52,53,54],learn:47,librari:47,line:53,machin:47,maintain:45,make:45,make_mock_shower_imag:[31,33],make_rectangular_camera_geometri:22,math:47,mcshowerdata:23,mock:52,modul:[50,51,52],momentparamet:28,multivari:47,obsconfig:[13,50],onlin:45,opticsconfig:14,output:51,packag:[0,37,38,39,40,52,53,54],parallel:43,pipelin:49,plan:43,raw:51,rawcameradata:24,rawdata:25,reco:52,reconstruct:52,refer:[0,37,38,39,40,41,50,51,52,53,54],releas:45,resourc:44,simobsconfig:15,start:[0,37,38,39,41,48,50,52,53,54],stat:47,structur:[40,42],style:46,subarrayconfig:16,support:47,tabl:47,telescopeconfig:17,telescopefram:5,telescopetriggerconfig:18,tiltedtelescopefram:6,todo:39,tool:53,updat:45,visual:54,what:49}})