<template>
    <div class="custom__checkbox--container">
        <input type="checkbox" name="remember" id="custom__checkbox" hidden />
        <label for="custom__checkbox" class="custom__checkbox--label">
          <span class="custom__checkbox--box"></span>
        </label>
    </div>
</template>

<style scoped>
.custom__checkbox--container {
    display: inline-block;
    vertical-align: middle;
}
  
.custom__checkbox--label {
    cursor: pointer;
    position: relative;
    padding-left: 30px;
}
  
.custom__checkbox--label .custom__checkbox--box {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #2b2b2b;
    border: 1.5px solid #fff;
    transition: .25s ease;
}
.custom__checkbox--label .custom__checkbox--box::after {
    content: '';
    position: absolute;
    display: none;
    left: 6px;
    top: 2px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
}
  
#custom__checkbox:checked + .custom__checkbox--label .custom__checkbox--box {
    background-color: rgb(0, 220, 130);
    border-color: rgb(0, 220, 130);
}
  
#custom__checkbox:checked + .custom__checkbox--label .custom__checkbox--box::after {
    display: block;
}
</style>
