import $ from 'jquery'
import ScrollOut from 'scroll-out';

$(function () {
    // $('#milestone-modal').modal('show')

    $('.animated.text-slide-in').each(function () {
        // const currClientRect = this.getBoundingClientRect();
        // const currLineHeight = parseInt($(this).css('line-height'));
        // const numLines = currClientRect.height / currLineHeight;

        $(this).html($(this).text().replace(/\S+/g, '<n>$&</n>'))
        $(this).find('n').attr('data-scroll', true)
    })

    ScrollOut()

    // $("#direction-modal").modal('show')
})