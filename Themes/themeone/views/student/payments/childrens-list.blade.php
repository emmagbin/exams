



<div class="panel-heading countdount-heading" >

	<h2>{{getPhrase('select_your_child')}}</h2>

</div>

<div class="panel-body">

	<ul class="list-replay list-sidebar">

	<?php $i=0; ?>
 
	@foreach($children as $user)

	<?php
     
	if(isItemPurchased($item_id, $item_type, $user->id))
           continue;
    



		$checked = '';

	 	if($i++==0)

	 		$checked = 'checked';

	?>

		<li>

			<a href="javascript:void(0);">

			<?php $url = getProfilePath($user->image, 'thumb'); ?>

				<img src="{{$url}}" alt="">

				<h4>{{$user->name}}</h4>

				

			 

					<input id="{{$user->id}}" onclick="changeSelectedUser('{{$user->id}}')" type="radio" class="form-control child" name="child" value="{{$user->id}}" >

					   <label for="{{$user->id}}">

			                <span class="fa-stack radio-button">

			                    <i class="mdi mdi-check active">

			                    </i>

			                </span>

			               

            			</label>

				 

				

			</a>

		</li>

	@endforeach

	</ul>

</div>



<script>
   
 //       var chkArray = 0;
	
	// $(".child:checked").each(function(){
	// 	chkArray.push($(this).val());
	// });

	// console.log(chkArray);
	

	function changeSelectedUser(selected_id) {

		 $('#selected_child_id').val(selected_id);

	}

</script>