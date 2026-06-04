/* ----------------------------------------------------------------------------
 * Easy!Appointments - Online Appointment Scheduler
 *
 * @package     EasyAppointments
 * @author      A.Tselegidis <alextselegidis@gmail.com>
 * @copyright   Copyright (c) Alex Tselegidis
 * @license     https://opensource.org/licenses/GPL-3.0 - GPLv3
 * @link        https://easyappointments.org
 * @since       v1.5.0
 * ---------------------------------------------------------------------------- */

/**
 * Booking layout.
 *
 * This module implements the booking layout functionality.
 */
window.App.Layouts.Booking = (function () {
    const $selectLanguage = $('#select-language');

    /**
     * Initialize the module.
     */
    function initialize() {
        App.Utils.Lang.enableLanguageSelection($selectLanguage);
        
        // Initialize Persian calendar for RTL languages (frontend only)
        if (document.documentElement.dir === 'rtl' && vars('language') === 'persian') {
            initializePersianCalendar();
        }
    }

    /**
     * Initialize Persian (Jalali) calendar support for flatpickr
     */
    function initializePersianCalendar() {
        // Override flatpickr to use Jalali calendar when in Persian language
        if (typeof flatpickr !== 'undefined' && typeof moment !== 'undefined') {
            // Store original flatpickr
            const originalFlatpickr = flatpickr;
            
            // Configure flatpickr instances to use Jalali calendar
            document.addEventListener('DOMContentLoaded', function() {
                // Apply Jalali locale to any flatpickr instances
                const jalaliLocale = {
                    weekdays: {
                        shorthand: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
                        longhand: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه']
                    },
                    months: {
                        shorthand: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
                        longhand: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند']
                    },
                    firstDayOfWeek: 6,
                    ordinal: function() {
                        return '';
                    }
                };
                
                // Set default locale for flatpickr
                flatpickr.localize(jalaliLocale);
            });
        }
    }

    document.addEventListener('DOMContentLoaded', initialize);

    return {};
})();
